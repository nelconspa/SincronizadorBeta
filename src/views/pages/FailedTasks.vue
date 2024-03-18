<template>
    <CRow>
        <CCol class="col-3">
            <ClientFilter 
                @filter="handleClients"
                
            /> 
        </CCol>
        <CCol class="col-3">
            <DeviceFilter 
                :allDevices="devicesFilter"
                @filter="handleDevices"
            /> 
        </CCol>

        <CCol class="col-4">
            <SearchBarFilter 
                @search="handleSearch" 
            /> 
        </CCol>
        <CCol class="col-2">
            <CButton>

            </CButton>
        </CCol>


    </CRow>

    <CTable class="mt-4" striped bordered>
        <CTableHead>
            <CTableRow>
                <CTableHeaderCell scope="col">Cliente</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                <CTableHeaderCell scope="col">Código zeus</CTableHeaderCell>
                <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                <CTableHeaderCell scope="col">Error</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow v-for="(task, index) in displayedTasks" :key="index">
                <template v-if="task.client !== null">
                    <CTableDataCell>{{ task.client.name }} </CTableDataCell>
                </template>
                <template v-else> 
                    <CTableDataCell> </CTableDataCell>
                </template>
                <CTableDataCell> {{ task.device.zeusName }} </CTableDataCell>
                <CTableDataCell>{{ task.device.zeusCode }} </CTableDataCell>
                <CTableDataCell>{{ task.last_error.updated_at }} </CTableDataCell>
                <CTableDataCell>{{ task.last_error.message }} </CTableDataCell>
            </CTableRow>
        </CTableBody>
    </CTable>

    <div class="style-pagination mt-5">
        <vue-awesome-paginate 
            :total-items="totalPages"
            :items-per-page="perPage"
            :max-pages-shown="5"
            v-model="currentPage"
        >
            <template #prev-button>
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                >
                    <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                </svg>
                </span>
            </template>

            <template #next-button>
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                >
                    <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                </svg>
                </span>
            </template>
        </vue-awesome-paginate>
    
    </div>
    
</template>

<script>
    import axios from 'axios';
    import DatePicker from '../../components/DatePicker.vue'; 
    import ClientFilter from '../../components/ClientFilter.vue'; 
    import DeviceFilter from '../../components/DeviceFilter.vue'; 
    import SearchBarFilter from '../../components/SearchFilter.vue'; 

    export default {
        name: "FailedTasks",
        components: {
            DatePicker,
            ClientFilter,
            DeviceFilter,
            SearchBarFilter,
        },
        data() {
            return {
                failTasks: [],
                showModal: [],
                searchFilter: '',
                clientsFilter: [],
                devicesFilter: [],
                totalDevices: [],
                perPage: 10,
                currentPage: 1,
                totalPages: 0
                
            }
            
        },
       
        computed: {
            displayedTasks() {
                const startIndex = (this.currentPage - 1) * this.perPage;
                const endIndex = startIndex + this.perPage;
                return this.filteredTasks.slice(startIndex, endIndex);
            },
            filteredTasks() {
                let filterTasks = this.failTasks;   
                if (this.clientsFilter.length > 0) {
                    filterTasks = filterTasks.filter(task => 
                        this.clientsFilter.includes(task.last_error.client_id) 
                    );
                }
                if (this.devicesFilter.length > 0 && this.devicesFilter.length < this.totalDevices.length) {
                    filterTasks = filterTasks.filter(task => 
                        this.devicesFilter.includes(task.last_error.device_id)
                    )
                    
                }
                //const startIndex = (this.currentPage - 1) * this.perPage; 
                //const endIndex = startIndex + this.perPage; 

                //return filterTasks.slice(startIndex, endIndex);  
                return filterTasks;
            }

        }, 
        watch: {
            filteredTasks() {
                this.totalPages = Math.ceil(this.filteredTasks.length / this.perPage);
            }
        },

        mounted() {
            this.getFailedTasks(); 
        },

        methods: {
            handleSearch(search) {
                this.searchFilter = search; 
            }, 

            handleClients(options) {
                this.clientsFilter = options; 
                this.getDevicesByClients(); 
                
            }, 
            handleDevices(options) {
                this.devicesFilter = options; 
                //this.getDevicesByClients(); 
                console.log("DEVICES: ",options); 
            }, 

            

            async getFailedTasks() {
                const response = await axios.get(
                    this.$store.state.backendUrl + '/syncManual',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + this.$store.state.token,
                        }
                    }
                ); 

                this.failTasks = response.data; 
                console.log(this.failTasks); 
                
                
            },

            async getDevicesByClients() { 
                try {
                    let devices = []; 
                    
                    for (const client_id of this.clientsFilter) {
                        const response = await axios.get(
                            this.$store.state.backendUrl + "/devices",
                            {
                                params: {
                                    'client_id': client_id,
                                    'clientConfig': true
                                },
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer " + this.$store.state.token,
                                },
                            }
                        )
                        devices = devices.concat(response.data.map(config => ({
                            ...config,
                            host: config.client_config.zeusHost
                        }))); 
                    }
                    this.totalDevices = devices; 
                    this.devicesFilter = devices; 
                    
                } catch (error) {
                    
                    console.error('Error en la solicitud a la API:', error);
                    this.ShowError = true;
                }
            }
        }
    } 
</script>

<style>
    .style-pagination .pagination-container {
        column-gap: 10px;
        align-items: center;
        }
    .style-pagination .paginate-buttons {
        height: 35px;
        width: 35px;
        cursor: pointer;
        border-radius: 4px;
        background-color: transparent;
        border: none;
        color: black;
        }

    .style-pagination .back-button,
    .style-pagination .next-button {
        background-color: black;
        color: white;
        border-radius: 8px;
        height: 45px;
        width: 45px;
        }
    .style-pagination .active-page {
        background-color: #e5e5e5;
        }
    .style-pagination .paginate-buttons:hover {
        background-color: #f5f5f5;
        }
    .style-pagination .active-page:hover {
        background-color: #e5e5e5;
        }

    .style-pagination .back-button svg {
        transform: rotate(180deg) translateY(-2px);
        }
    .style-pagination .next-button svg {
        transform: translateY(2px);
        }

    .style-pagination .back-button:hover,
    .style-pagination .next-button:hover {
        background-color: rgb(45, 45, 45);
        }

    .style-pagination .back-button:active,
    .style-pagination .next-button:active {
        background-color: rgb(85, 85, 85);
    }
</style>