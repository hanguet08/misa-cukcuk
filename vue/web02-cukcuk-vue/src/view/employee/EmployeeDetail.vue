<template>
         <!--dialog thông tin nhân viên--> 
    <div class="m-dialog m-full-dialog" id="digDetail" :class="{'m-dialog-show':isShow}">
        <div class="m-dialog-content">
             <div class="m-dialog-header">
                <span class="close-dialog" @click="btnCloseDialogOnClick"><i class="fas fa-times"></i></span>
            </div>
              <div class="m-dialog-body">
                <div class="m-dialog-title">THÔNG TIN NHÂN VIÊN</div>
                <div class="m-dialog-context">
                    <div class="context-left">
                        <div class="m-avt-input">
                            <img src="../../assets/img/default-avatar.jpg" alt="default-avatar" id="avatar" class="image-preview" name="pic">
                            <input type="file" style="display: none;" id="choose-avt">
                        </div>
                        <div class="m-avt-description">(Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png, .gif.)</div>

                    </div>
                    <div class="context-right">
                        <div class="m-form">
                            <div class="m-form-title">
                                <label for="" class="m-label">A. THÔNG TIN CHUNG</label>
                            </div>
                            <div class="m-under-title"></div>
                            <div class="m-form-row">
                                <div class="m-form-field">
                                    <label for="" class="m-input-label">Mã nhân viên (<font color="red">*</font>
                                        )</label>
                                    <div class="m-row"><input id="txtEmployeeCode" required v-model="employee.EmployeeCode"  propVal="EmployeeCode" type="text" class="m-input"></div>
                                </div>
                                <div class="m-form-field">
                                    <label for="" class="m-input-label">Họ và tên (<font color="red">*</font>)</label>
                                    <div class="m-row"><input id="txtEmployeeName" required v-model="employee.EmployeeName" propVal="EmployeeName" type="text" class="m-input" @blur="validateEmpty">
                                    </div>
                                </div>
                            </div>
                            <div class="m-form-row">
                                <div class="m-form-field">
                                    <label for="" class="m-input-label">Ngày sinh</label>
                                    <div class="m-row"><input type="date" id="txtDateOfBirth" v-model="employee.DateOfBirth" propVal="DateOfBirth" class="m-input"></div>
                                </div>
                                <div class="m-form-field">
                                    <label for="" class="m-input-label">Giới tính</label>
                                    <div class="m-row">
                                        <select propVal="Gender" class="m-input">
                                            <option value="1">Nam</option>
                                            <option value="0">Nữ</option>
                                            <option value="2">Khác</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="m-form-row">
                                <div class="m-form-field">
                                    <label for="" class="m-input-label">Email (<font color="red">*</font>)</label>
                                    <div class="m-row"><input type="text" id="txtEmail" required v-model="employee.Email" propVal="Email" class="m-input"></div>
                                </div>
                                <div class="m-form-field">
                                    <label for="" class="m-input-label">Số điện thoại (<font color="red">*</font>
                                        )</label>
                                    <div class="m-row"><input type="text" id="txtPhoneNumber" v-model="employee.PhoneNumber" required propVal="PhoneNumber" class="m-input"></div>
                                </div>
                            </div>
                            <div class="m-form-title">
                                <label for="" class="m-label"> B. THÔNG TIN CÔNG VIỆC</label>
                            </div>
                            <div class="m-under-title"></div>
                            <div class="m-form-row">
                                <div class="m-form-field">
                                    <label for="" class="m-input-label">Vị trí</label>
                                    <div class="m-row"><input type="text" propVal="PositionName" class="m-input"></div>
                                </div>
                                <div class="m-form-field">
                                    <label for="" class="m-input-label">Phòng ban (<font color="red">*</font>)</label>
                                 <!--   <div class="m-row">
                                        <select propVal="DepartmentId" required class="m-input" v-model="employee.DepartmentId">
                                          <option v-for="dep in departments" :key="dep.DepartmentId" :value="dep.DepartmentId">
                                              {{dep.DepartmentName}}
                                              </option>
                                            <option value="11452b0c-768e-5ff7-0d63-eeb1d8ed8cef">Phòng nhân sự</option>
                                            <option value="4e272fc4-7875-78d6-7d32-6a1673ffca7c">Phòng đào tạo</option>
                                            <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">Phòng marketting</option>
                                            <option value="469b3ece-744a-45d5-957d-e8c757976496">Phòng nghiên cứu</option>
                                        </select>

                                    </div>-->
                                </div>
                            </div>
                            <div class="m-form-row">
                                <div class="m-form-field">
                                    <label for="" class="m-input-label">Mức lương cơ bản</label>
                                    <div class="m-row"><input type="text" propVal="Salary" class="m-input"></div>
                                </div>
                                <div class="m-form-field">
                                    <label for="" class="m-input-label">Tình trạng công việc</label>
                                    <div class="m-row"><input type="text" propVal="WorkStatus" class="m-input"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div class="m-dialog-footer">
                <div class="group-btn-dialog">
                    <button class="m-btn-second btn-cancel" @click="btnCancleOnClick" id="btnCancel">Hủy</button>
                    <button class="m-btn m-btn-icon-online" style="margin-left: 16px;">
                        <div class="button-text" id="btnSave" @click="btnSaveOnClick"> <i class="far fa-save" style="margin-right: 16px;"></i>Lưu</div>
                    </button>

                </div>
            </div>
        </div>
        </div> 
        
</template>
<script>
/* eslint-disable */
import MISAEnum from '../../js/enum.js'
import axios from 'axios';
export default {
     name: 'EmployeeDetail',
    components: {
      
    },
  props:["isShow", "employeeSelectedInChil", "formMode"],
  watch: {
employeeSelectedInChil: function(newEmployeeSelected){
    this.employee=newEmployeeSelected;
},
created(){
var me=this;
axios.get("http://amis.manhnv.net/api/v1/Departments").then(function(res){
    me.departments=res.data;
}).catch(function(res){
    console.log(res);
})
},

  },
  data(){
      return {
        employee:{},
        /*employeeEdit: Object,*/
        departments: [],
        positions: []
      }
  },
  methods: {

  validateEmpty() {
var el = event.currentTarget;
var value = el.value;
if (!value) {
    el.classList.add("m-input-error");
}
  },
   //Chuyển id phòng ban về tên phòng ban tương ứng
        formatDepartment(value){
            var temp = ""
            this.departments.forEach(d => {
                if(d.DepartmentId == value){
                    temp = d.DepartmentName
                }
            });
            return temp           
        },
btnCloseDialogOnClick() {
     this.$emit("closeOnClick", false);
      },
btnCancleOnClick(){
          this.$emit("closeOnClick", false); 
      },
      btnSaveOnClick(){
            var employee=this.employee;
                //Trường hợp thêm nhân viên
                if(this.formMode == MISAEnum.FormMode.Add){               
                    axios.post('http://amis.manhnv.net/api/v1/Employees', employee)
                        .then(res=>{
                            console.log(res)
                            console.log('them thanh cong')
                             this.$emit('showToast', {text: 'Thêm thành công', status: 'ok'})
                            this.$emit('reloadTable')
                            this.$emit('closeOnClick', false)
                        }).catch(res=>{
                            console.log(res)
                            this.$emit('showToast', {text: 'Không thêm được', status: 'error'})
                        })
                }
                //Trường hợp sửa nhân viên
                if(this.formMode == MISAEnum.FormMode.Update){
                    axios.put(`http://amis.manhnv.net/api/v1/Employees/${employee.EmployeeId}`, employee)
                        .then(res=>{
                            console.log(res)
                            console.log('sua thanh cong')
                             this.$emit('showToast', {text: 'Sửa thành công', status: 'ok'})
                            this.$emit('reloadTable')
                            this.$emit('closeOnClick', false)
                        }).catch(res=>{
                            console.log(res)
                            this.$emit('showToast', {text: 'Không sửa được', status: 'error'})
                        })
                }
      }
      /*
btnSaveOnClick(){
   var employee=this.employee;
// validate dữ liệu
//1. validate bắt buộc nhập
//2. thông tin không được phép để trống
// 3. thông tin không được dài quá kí tự cho phép
//4. email không đúng định dạng
// gọi api thực hiện lưu dữ liệu
   axios
   .put(`http://amis.manhnv.net/api/v1/Employees/${employee.EmployeeId}`, employee)
   .then(function(res){
    console.log(res);
     this.$emit("closeOnClick", false); 
   
   })
   .catch(function(res){
    console.log(res);
})
      },*/
      
  // Hàm lưu thông tin   
  /* 
btnSaveOnClick(){
   var employee=this.employee;

// gọi api thực hiện lưu dữ liệu
if (this.formMode!= this.MISAEnum.FormMode.Add) {
 axios
   .post(`http://amis.manhnv.net/api/v1/Employees`, employee)
   .then(function(res){
       // hien thi toast message
       // an form chi tiet
       // thuc hien load du lieu
    console.log(res);
   })
   .catch(function(res){
    console.log(res);
})
}
else {
     axios
   .put(`http://amis.manhnv.net/api/v1/Employees/${employee.EmployeeId}`, employee)
   .then(function(res){
    console.log(res);
   })
   .catch(function(res){
    console.log(res);
})
}
 },*/
  }
}
</script>
