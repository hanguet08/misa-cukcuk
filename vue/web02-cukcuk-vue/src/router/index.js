import { createRouter, createWebHashHistory } from 'vue-router'
// 1. định nghĩa, import các router
import Employee from '../view/employee/EmployeeList.vue'
import Customer from '../view/customer/CustomerList.vue'
import Report from '../view/report/ReportList.vue'

//2. Định nghĩa các router
const routes = [{
        path: "/employee",
        name: "Employee",
        component: Employee
    }, {
        path: "/customer",
        name: "Customer",
        component: Customer
    }, {
        path: "/report",
        name: "Report",
        component: Report
    }]
    //3. Khởi tạo các router và truyền các router đã được định nghĩa
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
})
export default router