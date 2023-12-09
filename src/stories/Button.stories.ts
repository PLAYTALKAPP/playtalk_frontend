import type { StoryObj } from '@storybook/react';
import {action} from "@storybook/addon-actions" // action 함수 : 스토리북 액션패널에 이벤트를 기록하는 역할
import Button from "@/components/atom/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
		routing: {action: "clicked"},
  },
} 
// satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Done: Story = { // Done 변수명 :  storybook 에 표시되는 컴포넌트 이름
  // 버튼 컴포넌트 props
  args: {
    text: "Done",
    size: "w-40",
    variant: "done",
    routing: action("버튼클릭") 
  },
};

export const Regist: Story = {
  args: {
    text: "Regist",
    size: "w-2/5",
    variant: "regist",
    routing: () => {
      alert("버튼 클릭"); // alert 창띄우기 (alert 창 띄우면, 액션패널에 기록X)
      action("등록버튼클릭")(); // 스토리북 액션패널에 이벤트기록
    }
  },
};

export const Cancel: Story = {
  args: {
    text: "Cancel",
    variant: "cancel",
    // onClick 설정을 안줘도 이미 Button 컴포넌트에서 props 로 onClick 를 전달하고 있어서, 액션패널에 이벤트 기록은된다.
  },
};

export const Default: Story = {
  args: {
    text: "Default",
    variant: "default",
  },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
