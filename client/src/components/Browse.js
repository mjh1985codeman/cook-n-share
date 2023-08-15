import React from "react";

//With these statements, we're importing the useQuery Hook from Apollo Client.
//This will allow us to make requests to the GraphQL server we connected to and made
//available to the application using the <ApolloProvider> component in App.js
import { useQuery } from "@apollo/client";
import { GET_CREATIONS } from "../utils/queries";
import CreationList from "./CreationList";

const Browse = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(GET_CREATIONS);

  //  get the creation data out of the query's response, because every GraphQL response comes in a big data object.
  //  In this case, we'll need to access data.creations
  console.log('data: ' , data);
  const creations = data?.allCreations || [];
  console.log('creations: ' , creations);

  return (
    <>
      <main>
        <div className="flex-row justify-space-between">
          <div className="col-12 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <CreationList
                creations={creations}
                title="Look all the Yummy!..."
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Browse;
