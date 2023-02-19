<template>
    <div>
        <h1>论文</h1>
        <hr>
        <div class="year">
            <p style="display:inline">按年份查询：</p>
            <el-link 
            type="primary" 
            @click="getYear(item)"
            v-for="item in yearData"
            :key="item"
            :index="item"
            >
            <span>{{ item }}</span>
            <p style="display:inline;color: black;"> | </p>
            </el-link>
        </div>
        <h3>{{ year }}</h3>
        <hr>
        <!-- <div>
            <el-link type="primary">会议</el-link><p style="display:inline"> | </p>
            <el-link type="primary">期刊</el-link>
        </div>
        <h3>会议</h3>
        <div>
            <p style="display:inline">按首字母索引：</p>
            <el-link 
            type="primary" 
            @click="getLetter(litem)"
            v-for="litem in letters"
            :key="litem"
            :index="litem"
            >
            <span>{{ litem }}</span>
            <p style="display:inline;color: black;"> | </p>
            </el-link>
        </div> -->
        <div v-if="year === '全部'">
            <p v-for="item in conference">{{ item.title }}</p>    
        </div>
        <p v-for="item in trueYear">
            {{ item.title }}    
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            yearData: ['全部', 2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2010],
            year: '全部',
            // letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            // letter: 'A',
            conference: [
                {
                    // letter: 'A',
                    year: 2022,
                    title: "F.-M. Luo, S. Jiang, Y. Yu, Z. Zhang and Y.-F. Zhang. Adapt to Environment Sudden Changes by Learning a Context Sensitive Policy. In: Proceedings of the 36th AAAI Conference on Artificial Intelligence (AAAI'22), 2022."
                },
                {
                    // letter: 'A',
                    year: 2022,
                    title: "J.-Q. Yang, K.-B. Fan, H. Ma and D.-C. Zhan. RID-Noise: Towards Robust Inverse Design under Noisy Environments. In: Proceedings of the 36th AAAI Conference on Artificial Intelligence (AAAI'22), 2022."
                },
                {
                    // letter: 'C',
                    year: 2022,
                    title: "H. Luo, M. Zhang, P. Zhao and Z.-H. Zhou. Corralling a Larger Band of Bandits: A Case Study on Switching Regret for Linear Bandits. In: Proceedings of the 35nd Annual Conference on Learning Theory (COLT'22), 2022."
                },
                {
                    // letter: 'C',
                    year: 2022,
                    title: "H. Luo, M. Zhang and P. Zhao. Adaptive Bandit Convex Optimization with Heterogeneous Curvature. In: Proceedings of the 35nd Annual Conference on Learning Theory (COLT'22), 2022."
                },
                {
                    year: 2021,
                    title: "B.-J. Hou, Y.-H. Yan, P. Zhao, and Z.-H. Zhou. Storage Fit Learning with Feature Evolvable Streams. In: Proceedings of the 35th AAAI Conference on Artificial Intelligence (AAAI), 2021."
                },
                {
                    year: 2021,
                    title: "C. Feng and C. Qian. Multi-objective Submodular Maximization by Regret Ratio Minimization with Theoretical Guarantee. In: Proceedings of the 35th AAAI Conference on Artificial Intelligence (AAAI), 2021."
                },
                {
                    year: 2020,
                    title: "C. Bian, C. Feng, C. Qian, Y. Yu. An Efficient Evolutionary Algorithm for Subset Selection with General Cost Constraints. In: Proceedings of the 34th AAAI Conference on Artificial Intelligence (AAAI'20), New York, NY, 2020."
                },
                {
                    year: 2020,
                    title: "D. Xu, W.-J. Li. Hashing based Answer Selection. In: Proceedings of the 34th AAAI Conference on Artificial Intelligence (AAAI), New York, NY, 2020."
                },
                {
                    year: 2020,
                    title: "L.-Z. Guo, F. Kuang, Z.-X. Liu, Y.-F. Li, N. Ma, X.-H. Qie. Weakly-Supervised Learning Meets Ride-Sharing User Experience Enhancement. In: Proceedings of the 34th AAAI conference on Artificial Intelligence (AAAI'20), New York, NY, 2020."
                },
            ],
        }
    },
    methods: {
        getYear(item) {
            this.year=item
            this.isAll=false
        },
        getLetter(litem) {
            this.letter=litem
        }
    },
    computed: {
        trueYear() {
          var arr = this.conference.filter(item => {
            return item.year == this.year
          })
          return arr;
        }
    }
}
</script>
<style>
.year {
    display: inline-block;
}
</style>
