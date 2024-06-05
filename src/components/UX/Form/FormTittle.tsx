export default function FormTittle({title}:{title:string})
{
  return (
    <h1 className="text-center font-bold text-primary sm:text-lg">
      {title}
    </h1>
  );
}
