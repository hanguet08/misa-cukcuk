<template>
        <div class="m-page-header">
            <div class="m-page-title">Danh sách nhân viên</div>
            <div class="m-page-button">
                <button class="m-btn m-btn-icon m-icon-add" id="btnAdd" @click="btnAddOnClick">Thêm Nhân viên</button>

            </div>
        </div>
        <div class="m-page-toolbar">
            <div class="m-toolbar-left">
                <input type="text" class="m-input m-input-icon m-icon-search" style="width:300px;" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại" />
            
                <select class="m-combobox">
                    <option value="Nam">Tất cả phòng ban</option>
                    <option value="Nu">Phòng kế toán</option>
                    <option value="khác">Khác</option>
                </select>
                
                <select class="m-combobox">
                    <option value="Nam">Tất cả vị trí</option>
                    <option value="Nu">Nhân viên thử việc</option>
                    <option value="khác">Khác</option>
                </select>
            </div>
            <div class="m-toolbar-right">
                <button id="btnDelete" class="m-btn-delete" @click="deleteBtnOnClick"><i class="fa-solid fa-trash-can"></i></button>
                <button class="m-btn-refresh"></button>
            </div>
        </div>
        <div class="m-grid">
            <div class="m-grid-table">
                <table class="m-table" id="tbEmployeeList">
                     <thead>
                    <tr>
                        <th style="width: 30px;" ></th>
                        <th>#</th>
                        <th fieldName = "EmployeeCode">Mã nhân viên</th>
                        <th fieldName = "FullName">Họ và tên</th>
                        <th fieldName = "Gender" format ="gender">Giới tính</th>
                        <th style="text-align: center;" fieldName = "DateOfBirth" format = "ddmmyy">Ngày sinh</th>
                        <th fieldName = "PhoneNumber">Điện thoại</th>
                        <th fieldName = "Email">Email</th>
                        <th fieldName = "PositionName">Chức vụ</th>
                        <th fieldName = "DepartmentName">Phòng ban</th>
                        <th style="text-align: right;" fieldName = "Salary" format="money">Mức lương cơ bản</th>
                        <th fieldName = "WorkStatus" format="status">Tình trạng công việc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee, index) in employees" :key="employee.EmployeeId" :id="employee.EmployeeId" v-on:dblclick="rowOnDblClick(employee)">
                        <td style="padding-right: 0;">
                            <div  ref="checkbox" class="m-checkbox" @click="checkboxOnClick">
                                <i class="fas fa-check"></i>
                            </div>
                        </td>
                        <td>{{index+1}}</td>
                        <td>{{employee.EmployeeCode}}</td>
                        <td>{{employee.EmployeeName}}</td>
                        <td>{{employee.GenderName}}</td>
                        <td style="text-align: center;">{{employee.DateOfBirth}}</td>
                        <td>{{employee.PhoneNumber}}</td>
                        <td>{{employee.Email}}</td>
                        <td>{{employee.PositionName}}</td>
                        <td>{{employee.DepartmentName}}</td>
                        <td style="text-align: right;">{{employee.Salary}}</td>
                        <td>{{employee.WorkStatus}}</td>
                    </tr>
                    
                </tbody>
                    <!--
                    <thead>
                        <th class="text-align-left" style="padding-left: 16px"><input type="checkbox" class="c-check-box"/></th>
                        <th class="text-align-left" format="sort">STT</th>
                         <th class="text-align-left" propName="EmployeeName">Họ và tên</th>
                        <th class="text-align-left" style="width: 100px" propName="EmployeeCode">Mã nhân viên</th>  
                      
                        <th class="text-align-center" style="width:300px;" propName="DateOfBirth" format="date">Ngày sinh
                        </th>
                     
                        <th class="text-align-left" propName="DepartmentName">Phòng ban</th>
                      
                    </thead>
                    <tbody>
                        <tr v-for="emp in employees" :key="emp.EmpoyeeId" @dblclick="rowOnDblClick(emp)">
                             <td class="text-align-left"><input type="checkbox" class="c-check-box" /></td>
                          <td class="text-align-left">1</td>
                           <td class="text-align-left">{{emp.EmployeeName}}</td>     
                           <td class="text-align-left">{{emp.EmployeeCode}}</td>    
                              <td class="text-align-center">{{this.formatDate(emp.DateOfBirth)}}</td>
                            <td class="text-align-left">{{emp.DepartmentName}}</td>
                            </tr>
                    </tbody>-->

                </table>
            </div>
            <div class="m-paging">
                <div class="m-paging-left">Hiển thị <b>01-10/300</b> nhân viên</div>
                <div class="m-paging-center">
                    <button class="m-btn-first"></button>
                    <button class="m-btn-prev"></button>
                    <div class="m-page-number-group">
                        <button class="m-page-number m-page-number-selected">1</button>
                        <button class="m-page-number">2</button>
                        <button class="m-page-number">3</button>
                        <button class="m-page-number">4</button>
                    </div>
                    <button class="m-btn-next"></button>
                    <button class="m-btn-last"></button>
                </div>
                <div class="m-paging-right">
                    <select class="m-combobox" name="" id="">
                        <option value="10">10 nhân viên/trang</option>
                        <option value="20">20 nhân viên/trang</option>
                        <option value="50">50 nhân viên/trang</option>
                    </select>
                </div>
            </div>
        </div>
         <ToastMsg :items="toastList"/>
      <EmployeeDetail 
      :isShow="isShowDialog"
       @closeOnClick="showOrHideDialog" 
       :formMode="formMode"
       :employeeSelectedInChil="employeeSelected" 
        v-on:reloadTable='reloadTable'
        v-on:showToast="addToast"
        /> 
         <TheConfirm v-if="displayConfirm"
            :deleteList = 'deleteList'
            @hideConfirm="hideConfirm"
            @reloadTable='reloadTable'
            @emptyCheckedList="emptyCheckedList"
             @showToast='addToast'
            @hideToast='hideToast'
           /> 
</template>
<script>

import axios from 'axios';
import EmployeeDetail from "./EmployeeDetail.vue";
import TheConfirm from '../TheConfirm.vue'
import ToastMsg from '../../components/common/ToastMsg.vue'
import MISAEnum from '../../js/enum.js'



export default {
   name: "employee-list",
   components:{EmployeeDetail, TheConfirm, ToastMsg},
  
   
   //2. create
  
       //console.log("2. created đã có thể truy cập vào data và gọi được methods");
   //thực hiện lấy dữ liệu
   // gọi api lấy dữ liệu từ danh sách nhân viên
   created: function(){
   var me=this;
   axios
   .get("http://amis.manhnv.net/api/v1/Employees")
   .then(function(res){
       me.employees=res.data
       console.log(res)
   })
   .catch(function(res){
       console.log(res)
   })
    
   },/*
  
   
   /**
    * cac phuong thuc
    */
   methods: {
    getName()
    {return this.Name;},
     //xử lý sự kiện khi click vào checkbox
    checkboxOnClick(e){
    e.currentTarget.classList.toggle('checked')
   },
    /**
     * hien thi form cho phep sua thong tin nhan vien
     */
    rowOnDblClick(emp){
        var me=this;
        me.formMode=MISAEnum.FormMode.Update;
  //1. Lấy thông tin nhân viên
   //C1: lấy thông tin nhân viên có sẵn dưới client
   console.log(emp.EmployeeName);
  //C2. Lấy thông tin nhân viên từ API
   this.employeeSelected=emp;
   // Binding thông tin chi tiết nhân viên tương ứng lên form
   // Hiển thị Dialog
   this.showOrHideDialog(true);
   },

// Xử lý khi nhấn nút thêm mới nhân viên
    btnAddOnClick(){
        var me = this;
        me.formMode=MISAEnum.FormMode.Add;
        this.employeeSelected={};
        //lay thong tin ma nhan vien moi
        axios.get("http://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
        .then(function(res){
            console.log(res);
            me.employeeSelected.EmployeeCode=res.data;
        })
        .catch(function(res){
        console.log(res);
        })
        // hien thi form chi tiet
    this.showOrHideDialog(true);
       },
    showOrHideDialog(isShow) {
           this.isShowDialog=isShow;
       },
        //Xử lý sự kiện cho nút xóa
        deleteBtnOnClick(){
            this.deleteList = []
            var checkedList = document.querySelectorAll('.checked')
            checkedList.forEach(i => {
                var deleteItem = i.parentNode.parentNode.getAttribute('id')
                this.deleteList.push(deleteItem)
            });
            this.displayConfirm = true
        },
          //Ẩn confirm
        hideConfirm(){
            this.displayConfirm = false
        },
          //bỏ chọn các checkbox đã chọn khi lệnh xóa trước đó bị hủy
        emptyCheckedList(){
            var checkedList = document.querySelectorAll('.checked')
            checkedList.forEach(i => {
                i.classList.remove('checked')
            });

        },
           addToast(e){
            this.toastList.push(e)
            var me = this
            setTimeout(
                function(){
                    me.toastList.splice(me.toastList.indexOf(e), 1)
                }, 7000)
        },
        hideToast(e){
            console.log(e)
        },
       /**
        * hàm định dạng ngày tháng năm
        */
       formatDate(value){
           try {
                if (value) {
        value = new Date(value);

        let date = value.getDate();
        let month = value.getMonth() + 1;
        let year = value.getFullYear();

        date = (date < 10 ? `0${date}` : date);
        month = (month < 10 ? `0${month}` : month);

        value = `${date}/${month}/${year}`
    } else {
        value = "";
    }
    return value;
           }
           catch(error){
console.log(error);
return "";
           }
        
       }},
         reloadTable(){
            this.employees = []
            var me = this
            axios.get('http://cukcuk.manhnv.net/api/v1/Employees')
            .then(res=>{
                me.employees = res.data
            }).catch(res=>{
                console.log(res)
            })
        },
       /**
        * data
        */
       data(){
           return {
               formMode: null,
                positions:[],
            departments: [],
             displayConfirm: false,
              displayEmployeeForm: false,
                toastList: [],
        employees:[],
       employeeSelected:{},
       isShowDialog: false,
        deleteList:[],
           }
      
   },
}
</script>
