# Amazon EC2 On-Demand Pricing

- reference
    - [aws ec2 pricing](https://aws.amazon.com/tw/ec2/pricing/on-demand/?nc1=h_ls)
- setup 
    - host: aws ec2 
        - Location Type: AWS Region
        - Region: Asia Pacific (Hong Kong)
        - Operating System: Linux
        - Instance Type: General purpose

        - vCPU: 2
        - Memory: 

        | Instance Name | OnDemand Hourly | vCPU | Memory (GiB) | Storage  | Network Performance | Price per month | Price per year |
        |---------------|-----------------|------|--------------|----------|---------------------|-----------------|----------------|
        | t4g.small     | $0.0232         | 2    | 2            | EBS-Only | Up to 5 Gigabit     | $16.704         | $200.448       |
        | t4g.medium    | $0.0464         | 2    | 4            | EBS-Only | Up to 5 Gigabit     | $33.696         | $404.352       |
        | t4g.large     | $0.0928         | 2    | 8            | EBS-Only | Up to 5 Gigabit     | $67.392         | $808.704       |

        0.0232 * 24 = 0.5568, 0.5568 * 30 = 16.704, 16.704 * 12 = 200.448
        0.0464 * 24 = 1.1136, 1.1136 * 30 = 33.696, 33.696 * 12 = 404.352
        0.0928 * 24 = 2.2272, 2.2272 * 30 = 67.392, 67.392 * 12 = 808.704

        - vCPU: 4
        - Memory:

        | Instance Name | OnDemand Hourly | vCPU | Memory (GiB) | Storage  | Network Performance | Price per month | Price per year |
        |---------------|-----------------|------|--------------|----------|---------------------|-----------------|----------------|
        | t4g.xlarge    | $0.1856         | 4    | 16           | EBS-Only | Up to 5 Gigabit     | $133.824        | $1,605.888     |
        | t3.xlarge     | $0.2336         | 4    | 16           | EBS-Only | Up to 5 Gigabit     | $168.768        | $2,025.216     |

        0.1856 * 24 = 4.4544, 4.4544 * 30 = 133.824, 133.824 * 12 = 1,605.888
        0.2336 * 24 = 5.6064, 5.6064 * 30 = 168.768, 168.768 * 12 = 2,025.216

        - data trans
            - region: Asia Pacific (Hong Kong)
            - data transfer in: $0.00 per GB
            - data transfer out: 
                - first 10 TB / month: $0.012
                - next 40 TB / month: $0.085
                - next 100 TB / month: $0.082
                - over 150 TB / month: $0.08

# Domain & SSL

- cloudflare:
    - Pro: $20/ month, $240/ year
       - 透過 WAF 防範零時差及一般攻擊，包括 OWASP 弱點
       - 偵測遭竊和暴露認證
       - 偵測並查問容易偵測的機器人
       - 優先處理關鍵網站資產的載入
       - WordPress 的智慧型快取
       - 一鍵式影像最佳化
       - CDN 最佳化的 Cache Analytics
    - Business: $200 / month, $2400 / year
       - 使用 WAF 防範未知的應用程式弱點
       - 符合 PCI 與 SOC 2 Type II 標準
       - 偵測 Web 應用程式上的惡意第三方指令碼並接收警示
       - 自訂 SSL 憑證
       - 偵測並查問複雜機器人
       - 自訂名稱伺服器
       - 保證 100% 運作時間 (SLA)
    - free: $0 / month
       - 非計量應用程式層 DDoS 保護
       - IP 型限速
       - 使用 WAF 防範高嚴重性且廣泛的弱點
       - 僅偵測並查問常見的機器人
       - 通用 SSL 憑證
       - 快速且便於使用的 DNS
       - 全球 CDN

# TOTAl COST 

| hosting    | hosting cost (year) | Domain & SSL | Domain & SSL (year) | Total Cost (year) |
|------------|---------------------|--------------|---------------------|-------------------|
| t4g.small  | $200.448            | Pro          | $240                | $440.448          |
| t4g.medium | $404.352            | Pro          | $240                | $644.352          |
| t4g.large  | $808.704            | Pro          | $240                | $1,048.704        |
| t4g.xlarge | $1,605.888          | Pro          | $240                | $1,845.888        |
| t3.xlarge  | $2,025.216          | Pro          | $240                | $2,265.216        |
| t4g.small  | $200.448            | Business     | $2400               | $2,640.448        |
| t4g.medium | $404.352            | Business     | $2400               | $2,804.352        |
| t4g.large  | $808.704            | Business     | $2400               | $3,208.704        |
| t4g.xlarge | $1,605.888          | Business     | $2400               | $4,005.888        |
| t3.xlarge  | $2,025.216          | Business     | $2400               | $4,425.216        |
| t4g.small  | $200.448            | free         | $0                  | $200.448          |
| t4g.medium | $404.352            | free         | $0                  | $404.352          |
| t4g.large  | $808.704            | free         | $0                  | $808.704          |
| t4g.xlarge | $1,605.888          | free         | $0                  | $1,605.888        |
| t3.xlarge  | $2,025.216          | free         | $0                  | $2,025.216        |








