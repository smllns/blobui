const PageHeader = ({
  header,
  description,
}: {
  header: string;
  description: string;
}) => {
  return (
    <div>
      <h1 className='text-4xl font-semibold'>{header}</h1>

      <p className='mt-3 text-neutral-600'>{description}</p>
    </div>
  );
};

export default PageHeader;
