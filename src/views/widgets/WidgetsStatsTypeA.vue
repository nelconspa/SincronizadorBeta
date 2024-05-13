<template>
  <CRow :xs="{ gutter: 4 }">
    <CCol :sm="6" :xl="4" :xxl="3">
      <CWidgetStatsA color="primary">
        <template #value>{{ activeDevices }}
          <span class="fs-6 fw-normal">
            
          </span>
        </template>
        <template #title>Dispositivos Activos</template>
        
        
      </CWidgetStatsA>
    </CCol>
    
    
    <CCol :sm="6" :xl="4" :xxl="3">
      <CWidgetStatsA color="danger">
        <template #value
          >{{ inactiveDevices }}
          <span class="fs-6 fw-normal">
            
          </span>
        </template>
        <template #title>Dispositivos Inactivos</template>
        
        
      </CWidgetStatsA>
    </CCol>
  </CRow>
</template>

<script>
import { onMounted, ref } from 'vue'
import { CChart } from '@coreui/vue-chartjs'
import { getStyle } from '@coreui/utils'
import { useStore } from 'vuex'
import axios from 'axios'; 

export default {
  name: 'WidgetsStatsA',
  components: {
    CChart,
  },
  setup() {
	const store = useStore(); 
    const widgetChartRef1 = ref();
    const widgetChartRef2 = ref();
    const activeDevices = ref(0);
    const inactiveDevices = ref(0);

    onMounted(() => {
      document.documentElement.addEventListener('ColorSchemeChange', () => {
        if (widgetChartRef1.value) {
          widgetChartRef1.value.chart.data.datasets[0].pointBackgroundColor =
            getStyle('--cui-primary')
          widgetChartRef1.value.chart.update()
        }

        if (widgetChartRef2.value) {
          widgetChartRef2.value.chart.data.datasets[0].pointBackgroundColor =
            getStyle('--cui-info')
          widgetChartRef2.value.chart.update()
        }
      })

	  getStatsDevices(); 
    });

    async function getStatsDevices() {
		const response = await axios.get(
			store.state.backendUrl + '/getStats',
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + store.state.token,
				}
			}
		);

		activeDevices.value = response.data.activos;
		inactiveDevices.value = response.data.inactivos; 
    }

    

    return { 
		getStyle, 
		widgetChartRef1, 
		widgetChartRef2,
		activeDevices,
		inactiveDevices, 
	}
  },
}
</script>
