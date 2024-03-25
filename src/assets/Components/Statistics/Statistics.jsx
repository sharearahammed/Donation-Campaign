import Hook from "../Hook/Hook";
import useLocalStorage from "../Hook/useLocalStorage";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const {data : donationdata} = Hook();
    const {localData} = useLocalStorage();

    const data = [
        { name: 'Your Donation', value: localData.length },
        { name: 'Group B', value: donationdata.length -  localData.length},
      ];
      
      const COLORS = ['#0088FE', '#00C49F'];
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(2)}%`}
          </text>
        );
      };
      
    return (
        <div style={{
            width:"100%",
            height: "80vh"
        }}>
            <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;