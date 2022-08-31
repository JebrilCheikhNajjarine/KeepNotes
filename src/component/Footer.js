const date = new Date();
function Footer() {
  return (
    <footer className="absolute text-center b-0  w-full text-xl text-gray-500  dark:text-gray-400 bg-white dark:bg-primary  ">
      <p>copyright©Najjarine{date.getFullYear()}</p>
    </footer>
  );
}
export default Footer;
