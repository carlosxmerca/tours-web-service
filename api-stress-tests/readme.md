# k6 Testing Project

This project contains scripts for performing load and stress testing on APIs using k6, 
an open-source performance testing tool.

## ⚙️ Installation

Follow the official guide to install k6:
https://grafana.com/docs/k6/latest/set-up/install-k6/

## 🚀 Run Tests
Execute the main load test script with the following command:

```
k6 run ./scripts/[script]
```

## Results

### Load test
```
execution: local
        script: .\load-test.js.js
        output: -

     scenarios: (100.00%) 1 scenario, 50 max VUs, 5m30s max duration (incl. graceful stop):
              * default: 50 looping VUs for 5m0s (gracefulStop: 30s)


  █ TOTAL RESULTS

    HTTP
    http_req_duration.......................................................: avg=7.77ms min=996.5µs med=6.07ms max=544.36ms p(90)=14.01ms p(95)=17.46ms
      { expected_response:true }............................................: avg=7.77ms min=996.5µs med=6.07ms max=544.36ms p(90)=14.01ms p(95)=17.46ms
    http_req_failed.........................................................: 0.00%  0 out of 29568
    http_reqs...............................................................: 29568  98.235149/s

    EXECUTION
    iteration_duration......................................................: avg=1.01s  min=1s      med=1.01s  max=1.56s    p(90)=1.02s   p(95)=1.02s
    iterations..............................................................: 14784  49.117574/s
    vus.....................................................................: 1      min=1          max=50
    vus_max.................................................................: 50     min=50         max=50

    NETWORK
    data_received...........................................................: 65 MB  216 kB/s
    data_sent...............................................................: 2.6 MB 8.8 kB/s


running (5m01.0s), 00/50 VUs, 14784 complete and 0 interrupted iterations
```

### Stress test
```
scenarios: (100.00%) 1 scenario, 400 max VUs, 7m30s max duration (incl. graceful stop):
              * default: Up to 400 looping VUs for 7m0s over 6 stages (gracefulRampDown: 30s, gracefulStop: 30s)


  █ TOTAL RESULTS

    HTTP
    http_req_duration.......................................................: avg=126.79ms min=992.4µs med=60ms  max=1.49s p(90)=356.63ms p(95)=436.71ms
      { expected_response:true }............................................: avg=126.79ms min=992.4µs med=60ms  max=1.49s p(90)=356.63ms p(95)=436.71ms
    http_req_failed.........................................................: 0.00%  0 out of 119878
    http_reqs...............................................................: 119878 284.880849/s

    EXECUTION
    iteration_duration......................................................: avg=1.25s    min=1s      med=1.13s max=3.34s p(90)=1.66s    p(95)=1.79s
    iterations..............................................................: 59939  142.440425/s
    vus.....................................................................: 2      min=1           max=400
    vus_max.................................................................: 400    min=400         max=400

    NETWORK
    data_received...........................................................: 264 MB 628 kB/s
    data_sent...............................................................: 11 MB  26 kB/s


running (7m00.8s), 000/400 VUs, 59939 complete and 0 interrupted iterations
```

### Soak test
```
scenarios: (100.00%) 1 scenario, 20 max VUs, 30m30s max duration (incl. graceful stop):
              * default: 20 looping VUs for 30m0s (gracefulStop: 30s)


  █ TOTAL RESULTS

    HTTP
    http_req_duration.......................................................: avg=12.37ms min=1.98ms med=10.77ms max=454.64ms p(90)=22.07ms p(95)=26.57ms
      { expected_response:true }............................................: avg=12.37ms min=1.98ms med=10.77ms max=454.64ms p(90)=22.07ms p(95)=26.57ms
    http_req_failed.........................................................: 0.00%  0 out of 70216
    http_reqs...............................................................: 70216  38.989262/s

    EXECUTION
    iteration_duration......................................................: avg=1.02s   min=1s     med=1.02s   max=1.51s    p(90)=1.03s   p(95)=1.04s
    iterations..............................................................: 35108  19.494631/s
    vus.....................................................................: 20     min=20         max=20
    vus_max.................................................................: 20     min=20         max=20

    NETWORK
    data_received...........................................................: 155 MB 86 kB/s
    data_sent...............................................................: 6.3 MB 3.5 kB/s


running (30m00.9s), 00/20 VUs, 35108 complete and 0 interrupted iterations
```
