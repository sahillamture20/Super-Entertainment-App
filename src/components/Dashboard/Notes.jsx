import { useState, useEffect, useRef } from 'react';

const Notes = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className='w-full'>
      <textarea
        ref={textareaRef}
        rows={14}
        cols={48}
        className="text-black rounded-xl resize-none overflow-y-hidden bg-[#F1C75B] outline-none px-3 py-1"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default Notes;
