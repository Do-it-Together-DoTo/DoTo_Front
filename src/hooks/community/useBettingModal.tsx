import { IBetting, IBettingDetail, IBettingJoin } from '@/api/community/Betting.Interface';
import { joinBetting, getBetting } from '@/api/community/BettingApi';
import { ChangeEvent, useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

//베팅만들기
interface createBettingProps {
  betting: IBetting;

  onSubmit?: () => void;
  validate?: () => void;
}

export const useBettingModal = ({ betting }: createBettingProps) => {
  //onSubmit은 제출후 결과
  const [values, setValues] = useState({});
  const [errors] = useState({});
  const navigate = useNavigate();
  // const [submitting, setSubmitting] = useState(false);
  const [bettingDetail, setBettingDetail] = useState<IBettingDetail | null>(null);

  async function fetchBetting() {
    try {
      const response = await getBetting(betting.bettingId);
      setBettingDetail(response.data.body);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBetting();
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // setSubmitting(true);
    console.log(bettingDetail);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    if (bettingDetail?.chatRoomId !== null) {
      navigate(`/community/chatting/${bettingDetail?.chatRoomId}`);
    } else {
      fetchJoinBetting();
    }
  };

  async function fetchJoinBetting() {
    try {
      const response = await joinBetting(betting.bettingId, values as IBettingJoin);
      console.log(response);
    } catch (error) {
      console.log(error);
      // setErrors(validate(values));
    }
  }

  // useEffect(() => {
  //   if (submitting) {
  //     if (Object.keys(errors).length === 0) {
  //       onSubmit(values);
  //     }
  //     setSubmitting(false);
  //   }
  // }, [errors]);

  return {
    bettingDetail,
    values,
    errors,
    // submitting,
    handleChange,
    handleSubmit,
  };
};

//change된 field를 변경해서 submit떄 제출하자
