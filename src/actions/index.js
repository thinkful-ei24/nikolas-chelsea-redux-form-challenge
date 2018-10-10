import { SubmissionError } from "redux-form";

export const trackingActionAsync = values => dispatch => {
	return fetch(
		"https://us-central1-delivery-form-api.cloudfunctions.net/api/report",
		{
			method: "POST",
			body: JSON.stringify(values),
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
		.then(res => {
			if (!res.ok) {
				if (
					res.headers.has("content-type") &&
					res.headers.get("content-type").startsWith("application/json")
				) {
					// It's a nice JSON error returned by us, so decode it
					return res.json().then(err => Promise.reject(err));
				}
				// It's a less informative error returned by express
				return Promise.reject({
					code: res.status,
					message: res.statusText
				});
			}
			return;
		})
		.then(() => console.log("Submitted with values", values))
		.catch(error =>
			Promise.reject(
				new SubmissionError({
					_error: error.message
				})
			)
		);
};
// 		.then(res => {
// 			if (res.ok) {
// 				return res.json();
// 			} else {
// 				return Promise.reject(res);
// 			}
// 		})
// 		.then(values => console.log("Submitted with values", values))
// 		.catch(error => {
// 			if (
// 				error.headers.has("content-type") &&
// 				error.headers.get("content-type").startsWith("application/json")
// 			) {
// 				return error.json().then(data => {
// 					throw new SubmissionError({
// 						_error: data.message
// 					});
// 				});
// 			} else {
// 				throw new SubmissionError({
// 					_error: error.statusText
// 				});
// 			}
// 		});
// };
