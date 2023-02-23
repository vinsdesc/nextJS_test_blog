export default function DateWidget({ dateString }) {
  console.log(dateString);
  const formattedDate = new Date(dateString).toLocaleDateString();
  return <time>{formattedDate}</time>;
}
