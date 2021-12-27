import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Index";
import { Page404Wrap } from "../styles/Page404Wrap";

function Page404() {
  return (
    <Layout>
      <Page404Wrap>
        <div>
          <h1>404</h1>
          <p>Sorry path is invalid!</p>
          <Link to="/" className="btn ">
            To Home
          </Link>
        </div>
      </Page404Wrap>
    </Layout>
  );
}

export default Page404;
