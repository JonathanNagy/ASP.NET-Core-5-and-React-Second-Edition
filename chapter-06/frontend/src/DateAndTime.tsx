interface Props {
  data: Date;
}

export const DateAndTime = ({ data }: Props) => (
  <span>{`${data.toLocaleDateString()} ${data.toLocaleTimeString()}`}</span>
);
