import { ChangeEvent, FC, useState } from "react";

const Welcome: FC = () => {
  const [name, setName] = useState<string>()
  
  return (
      <div>
        <p>Please type in your name:</p>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)}/>
        <h2>{name ? `Welcome ${name}.` : null}</h2>
      </div>
  )
}

export default  Welcome