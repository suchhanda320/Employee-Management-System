import { useEffect, useState } from 'react'
import { createEmployee,getEmployee,updateEmployee} from '../services/EmployeeService'
import { useNavigate,useParams} from 'react-router-dom'

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const navigator = useNavigate()

  useEffect (() => {
    if (id) {
      getEmployee(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch(error => {
        console.error(error);
      })
    }
  },[id])

  function saveorUpdateEmployee(e) {
    e.preventDefault()

    if (validateForm()) {
      const employee = { firstName, lastName, email }
      console.log(employee)
      if(id){
        updateEmployee(id,employee).then((response) => {
          console.log(response.data)
          navigator('/employees')
        }).catch(error => {
          console.error(error);
        })
      }else{
      
      createEmployee(employee).then(() => {
        navigator('/employees')
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}

  function validateForm() {
    let valid = true
    const errorsCopy = { ...errors }

    if (firstName.trim()) {
      errorsCopy.firstName = ''
    } else {
      errorsCopy.firstName = 'First Name is required'
      valid = false
    }

    if (lastName.trim()) {
      errorsCopy.lastName = ''
    } else {
      errorsCopy.lastName = 'Last Name is required'
      valid = false
    }

    if (email.trim()) {
      errorsCopy.email = ''
    } else {
      errorsCopy.email = 'Email is required'
      valid = false
    }

    setErrors(errorsCopy)
    return valid
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center mb-4">Update Employee</h2>
    }
    else{
      return <h2 className="text-center mb-4">Add Employee</h2>
    }
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              {
                pageTitle()
              }
              <form onSubmit={saveorUpdateEmployee}>
                {/* First Name */}
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    placeholder="Enter Employee First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                {/* Last Name */}
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    placeholder="Enter Employee Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Enter Employee Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
