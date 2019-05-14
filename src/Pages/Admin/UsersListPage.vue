<template>
    <div>
        <PageBlueHeader name="Userslist" />
        <el-main class="list">
            <el-table ref="filterTable"
                      :data="currentUsers"
                      style="width: 80%">
                <el-table-column label="FIO">
                    <template slot-scope="scope">
                        <span>{{ scope.row.lName }} </span>
                        <span>{{ scope.row.fName }} </span>
                    </template>
                </el-table-column>

                <el-table-column prop="balance"
                                 label="Balance(Rub)"
                                 sortable>
                </el-table-column>
                <el-table-column prop="license"
                                 label="License(Days)"
                                 sortable>
                </el-table-column>
                <el-table-column label="Operations">
                    <template slot-scope="scope">
                        <el-button size="mini">Edit</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination :page-size="itemsPerPage"
                           style="margin-top:30px;"
                           layout="prev, pager, next"
                           :total="users.length"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                           >
            </el-pagination>
        </el-main>
    </div>
</template>

<script>
import PageBlueHeader from '../../components/PageBlueHeader.vue';
export default {
  name: 'home',
  components: {
      PageBlueHeader
        },
  data() {
            return {
                itemsPerPage: 10,
                currentPage: 1,
                
            };
        },
  methods: {
            handleSizeChange(val) {
                console.log(`${val} items per page`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
            }
       },
  computed: {
            currentUsers: function () {
                return this.$store.getters.allUsers.slice((this.currentPage-1) * this.itemsPerPage,this.currentPage*this.itemsPerPage);
            },
            users: function () {
                return this.$store.getters.allUsers;
            }
        },
  created: function () {
      this.$store.dispatch('loadUsers');
        }
}
</script>
<style>
    .list {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #fff;
    }
</style>
