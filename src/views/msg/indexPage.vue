<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;" size="mini">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.message" placeholder="输入消息体关键字进行查询"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="handleSearch">快速检索</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="id" label="id" width="200" sortable>
			</el-table-column>
			<el-table-column prop="region" label="区县" width="200" sortable>
			</el-table-column>
			<el-table-column prop="data_time" label="产生时间" width="200" sortable>
			</el-table-column>
			<el-table-column prop="send_time" label="发送时间" width="200" sortable>
			</el-table-column>
			<el-table-column prop="service_type" label="业务类型" width="200" sortable>
			</el-table-column>
			<el-table-column prop="send_count" label="发送次数" width="200" sortable>
			</el-table-column>
			<el-table-column prop="message" label="消息"  sortable v-if="false">
			</el-table-column>
			<el-table-column label="操作" width="300">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">查看消息</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">发送</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量发送</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
	</section>
</template>

<script>
    import util from '../../common/js/util'
    //import NProgress from 'nprogress'
    import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

    export default {
        data() {
            return {
                filters: {
                    message: ''
                },
                users: [],
                total: 0,
                page: 1,
                listLoading: false,
                sels: [],//列表选中列

                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ]
                },
                //编辑界面数据
                editForm: {
                    id: 0,
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                },

                addFormVisible: false,//新增界面是否显示
                addLoading: false,
                addFormRules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ]
                },
                //新增界面数据
                addForm: {
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                }

            }
        },
        methods: {
//            handleCurrentChange(val) {
//                this.page = val;
//                this.getUsers();
//            },
            //获取用户列表
            handleSearch() {
                let para = {
                    page: this.page,
                    name: this.filters.name
                };
                this.listLoading = true;
                //NProgress.start();
                getUserListPage(para).then((res) => {
                    this.total = res.data.total;
                    this.users = res.data.users;
                    this.listLoading = false;
                    //NProgress.done();
                });
            }
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
			mounted() {
				this.handleSearch();
			}
    }

</script>

<style scoped>

</style>