type PageHeaderProps = {
  header: string;
  description: string;
};

export function PageHeader({ header, description }: PageHeaderProps) {
  return (
    <div>
      <h1 className='m-0 text-display-lg text-fg'>{header}</h1>
      <p className='mt-2 text-body-lg text-fg-secondary'>{description}</p>
    </div>
  );
}
