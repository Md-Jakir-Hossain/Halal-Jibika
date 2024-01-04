import { redirect } from "react-router-dom";

export const getRequest = async () => fetch(`http://localhost:9000/jobs/`);

export const postRequest = async ({ request }) => {
  const data = await request.formData();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(data)),
  };
  await fetch(`http://localhost:9000/jobs`, requestOptions);
  return redirect("/jobs");
};

export const delteRequest = async ({ params }) => {
  await fetch(`http://localhost:9000/jobs/${params.id}`, {
    method: "DELETE",
  });
  return redirect("/jobs");
};

export const updateRequest = async ({ params, request }) => {
  const data = await request.formData();
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(data)),
  };
  await fetch(`http://localhost:9000/jobs/${params.updateId}`, requestOptions);

  return redirect("/jobs");
};
