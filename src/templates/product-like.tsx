import React from "react";
import { graphql } from "gatsby";

const ProductLikeCount = ({ data }: any) => {
	const total_subscriptions  = data.customApi;
	
	return (
		<div>
            {total_subscriptions}
        </div>
	);
};

export const query = graphql`
	query($handle: String!) {
        customApi(subscriptions: {elemMatch: {subscriber: {first_name: {eq: $handle}}}}) {
            total_subscriptions
        }
	}
`;

export default ProductLikeCount;
