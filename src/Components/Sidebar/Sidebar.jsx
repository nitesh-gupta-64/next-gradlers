// import React from "react";
// import styles from "./Sidebar.module.css";
// import Form from "../Form/Form";

// const Sidebar = () => {
//   return (
//     <div id={styles.side}>
//       <Form />
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import styles from "./Sidebar.module.css";
import Form from "../Form/Form";
import Script from "next/script";

const Sidebar = () => {
  return (
    <div id={styles.side}>
      <form
        class="npf_wgts"
        data-height="400px"
        data-w="126126f4ca07e7566448375bd97faeee"
      ></form>
      <Script type="text/javascript">
        var s=document.createElement("script"); s.type="text/javascript";
        s.async=true; s.src="https://widgets.in8.nopaperforms.com/emwgts.js";
        document.body.appendChild(s);
      </Script>
    </div>
  );
};

export default Sidebar;
