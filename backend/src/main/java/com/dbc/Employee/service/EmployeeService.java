package com.dbc.Employee.service;

import com.dbc.Employee.model.Employee;

import java.util.List;

public interface EmployeeService{

    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();
}
