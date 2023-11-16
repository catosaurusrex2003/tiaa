'use client'

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function RoomId({ params }: { params: { roomId: number } }) {
  const myMeeting = async (element: HTMLElement | undefined | null) => {
    const myAppId: string | undefined = process.env.NEXT_PUBLIC_APPID || '123';
    const appId: number = parseInt(myAppId);
    const serverSecret: string | undefined = process.env.NEXT_PUBLIC_SERVERSECRET || 'ABC';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      `${params.roomId}`,
      Date.now().toString(),
      "Satvam"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container: element,
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
        }
    })
  };

  return (
    <div>
      <div className='h-screen' ref={myMeeting}/>
    </div>
  );
}
