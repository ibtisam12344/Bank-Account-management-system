import Signup from "../_components/Signup";

function Page() {
  return (
    <section className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full mx-auto sm:max-w-lg p-6">
      <Signup type="not-initial" />
    </section>
  );
}

export default Page;
