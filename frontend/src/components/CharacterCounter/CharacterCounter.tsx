import { useRecoilState } from 'recoil';
import { textState } from 'store/atoms/app';

export function CharacterCounter() {
  const [text, setText] = useRecoilState(textState);
  console.log('🚀 ~ file: CharacterCounter.tsx ~ line 14 ~ TextInput ~ text', text);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
