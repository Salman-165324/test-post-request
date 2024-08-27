"use server";

export async function createAction(formData) {

  
  const newFormData = {
    fname: formData.get("name"),
    email: formData.get("email"),
  };
  const data = 
    {
      "star": 4,
      "descriptions": "string",
      "is_active": true,
      "first_name": "string",
      "last_name": "string",
      "product": 414,
      "reviewed_by": 1
    }
  ;

    console.log("Form data ", newFormData.fname, newFormData.email);
  

    const response = await fetch("https://kaaruj.backend.clients.devsstream.com/api/v1/promotions/web/review/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

     
    console.log("Our Request",response);

    if (!response.ok) {
      throw new Error("Failed to send data");
    }


    

    return response.json();
  }