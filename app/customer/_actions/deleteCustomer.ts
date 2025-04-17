'use server'
import { revalidatePath } from 'next/cache'  
import { cookies } from 'next/headers'  
import { redirect } from 'next/navigation'

const deleteCustomer = async (id: number) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3NDQ5NTA3OTQsImV4cCI6MTc0NTAzNzE5NH0.z0oXR9tJ0do-hXiGHQ9Gq2Sf4fIt4tQkBflUX_5UPrs"
    
    console.log("id: ", id)
    const res = await fetch(`http://localhost:3000/customer/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const json = await res.json();
    console.log("json: ", json)
    if (res.ok) {
        console.log("Customer deleted successfully")
        revalidatePath('/customer')  
    } else {
        console.error("Error deleting customer:", json); 
        redirect('/customer?error=Error deleting customer');
    }
}

export default deleteCustomer