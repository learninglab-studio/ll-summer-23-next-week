import LlufCard from '@/components/mk/cards/LlufCard';

const Page = ({params, searchParams}) => {
  return (
    <div>

        <pre>{JSON.stringify(params, null, 4)}</pre>
        <LlufCard personSlug={params.slug} />
    </div>
  );
};

export default Page;


