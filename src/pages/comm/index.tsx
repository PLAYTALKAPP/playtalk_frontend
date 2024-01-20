import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@/components/atom/Button";

interface Community {
  commId: number;
  title: string;
  content: string;
  viewCount: number;
  postTime : number;
  category : string;
  //UserDto(글을 쓴 유저정보)
  //댓글정보
  //글이미지정보
}


const CommPage: React.FC = () => {
  const [comm, setComm] = useState<Community[]>([]);
  console.log("확인")

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await axios.get<Community[]>("/comm/list"); 
        // 백엔드 주소 및 엔드포인트로 수정
        setComm(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
				// 에러 객체의 상세 정보를 출력
				if (axios.isAxiosError(error)) {
					console.error("AxiosError details:", error.response);
				}
      }
    
			
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {comm.map((board) => (
          <li key={board.commId}>
            {board.postTime} - {board.viewCount}

          </li>
        ))}
      </ul>
      <Button text={"삭제"} variant={"default"} size={"w-20"}/>
    </div>
  );
};


 export default CommPage;