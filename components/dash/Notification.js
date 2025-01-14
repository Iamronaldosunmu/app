export default function Notification({ unread, type, title, description, who, time }) {
  let buttonTheme, textTheme;
  switch (type) {
    // Tailwind doesn't use template literal concatenation so this is the only choice
    case "Workshop":
      buttonTheme = "button-fruit-salad";
      textTheme = "text-fruit-salad";
      break;
    case "Event":
      buttonTheme = "button-orange-peel";
      textTheme = "text-orange-peel";
      break;
    case "Feature update":
      buttonTheme = "button-link";
      textTheme = "text-link";
      break;
    default:
      buttonTheme = "button-deep-sky-blue";
      textTheme = "text-deep-sky-blue";
  }

  // TODO: Parse JavaScript time object instead of using string

  return (
    <div className="border-b-2 p-5">
      <div className="grid grid-cols-2">
        <div>
          <button className={`button-medium ${buttonTheme} relative`} disabled={true}>
            {type}
            {unread && (
              <span className="absolute bg-black dark:bg-white h-4 w-4 rounded-full -top-2 -right-2" />
            )}
          </button>
        </div>
        <div className="flex flex-row-reverse gap-10 items-center">
          <div className="cursor-pointer block border-2 leading-none w-[30px] h-[30px] text-[26px] text-center">
            &times;
          </div>
          <div className="flex gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.9998 7.12H11.2198L13.9598 4.3C11.2298 1.6 6.80976 1.5 4.07976 4.2C3.43116 4.84059 2.91619 5.60358 2.56472 6.44471C2.21325 7.28584 2.03226 8.18839 2.03226 9.1C2.03226 10.0116 2.21325 10.9142 2.56472 11.7553C2.91619 12.5964 3.43116 13.3594 4.07976 14C6.80976 16.7 11.2298 16.7 13.9598 14C15.3198 12.65 15.9998 11.08 15.9998 9.1H17.9998C17.9998 11.08 17.1198 13.65 15.3598 15.39C11.8498 18.87 6.14976 18.87 2.63976 15.39C-0.86024 11.92 -0.89024 6.28 2.61976 2.81C4.30267 1.14275 6.57581 0.207398 8.94476 0.207398C11.3137 0.207398 13.5868 1.14275 15.2698 2.81L17.9998 0V7.12ZM9.49976 5V9.25L12.9998 11.33L12.2798 12.54L7.99976 10V5H9.49976Z"
                fill="black"
              />
            </svg>
            {time}
          </div>
        </div>
      </div>
      <div className="mb-2">
        <h2 className="subheadline">{title}</h2>
        <p className="sm">{description}</p>
      </div>
      <p className={`font-bold sm ${textTheme}`}>{who}</p>
    </div>
  );
}
