// <? xml version = "1.0" encoding = "utf-8" ?>
//     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
//         <circle cx="50" cy="50" fill="none" stroke="#1d0e0b" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
//             <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
//         </circle>
//     </svg>

// make a jsx component from the above

export default function LoadingIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: "auto" }}
            className="w-6 h-6"
            display="block"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 100 100"
        >
            <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="#FFF"
                strokeDasharray="164.93361431346415 56.97787143782138"
                strokeWidth="10"
            >
                <animateTransform
                    attributeName="transform"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
        </svg>
    )
}