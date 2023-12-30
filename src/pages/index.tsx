import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  userId: string;
  nkname: string;
  // noticeList: Notice[];
  // 다른 필요한 필드가 있다면 여기에 추가
}

// interface Notice{
//   notice_id: number;
//   title: string;
//   content: string;
// }
const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  console.log("확인")

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await axios.get<User[]>("/api/user"); 
        // 백엔드 주소 및 엔드포인트로 수정
        setUsers(response.data);
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
        {users.map((user) => (
          <li key={user.userId}>
            {user.userId} - {user.nkname}
              {/* {user.noticeList.map((noti)=>
                  <span key={noti.notice_id}>
                    {noti.title} - {noti.content}
                  </span>)} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
