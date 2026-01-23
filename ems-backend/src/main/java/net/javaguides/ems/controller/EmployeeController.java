package net.javaguides.ems.controller;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // ✅ Add Employee
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(
            @RequestBody EmployeeDto employeeDto) {

        EmployeeDto savedEmployee =
                employeeService.createEmployee(employeeDto);

        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // ✅ Get Employee by ID
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(
            @PathVariable("id") Long employeeId) {

        EmployeeDto employeeDto =
                employeeService.getEmployeeById(employeeId);

        return ResponseEntity.ok(employeeDto);
    }

    // ✅ Get All Employees
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {

        List<EmployeeDto> employees =
                employeeService.getAllEmployees();

        return ResponseEntity.ok(employees);
    }

    // ✅ Update Employee (THIS FIXES 405)
    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(
            @PathVariable("id") Long employeeId,
            @RequestBody EmployeeDto employeeDto) {

        EmployeeDto updatedEmployee =
                employeeService.updateEmployee(employeeId, employeeDto);

        return ResponseEntity.ok(updatedEmployee);

    }
    //Build Delete Employee REST API
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully !!");
    }
}
