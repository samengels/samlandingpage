"use client";

import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Learning progress over time
const learningData = [
  { month: 'Jan', students: 156, completionRate: 78, projectSubmissions: 89 },
  { month: 'Feb', students: 230, completionRate: 82, projectSubmissions: 120 },
  { month: 'Mar', students: 345, completionRate: 85, projectSubmissions: 190 },
  { month: 'Apr', students: 410, completionRate: 88, projectSubmissions: 245 },
  { month: 'May', students: 589, completionRate: 92, projectSubmissions: 320 },
  { month: 'Jun', students: 782, completionRate: 90, projectSubmissions: 450 },
];

// AI Tools Usage in Projects
const toolsData = [
  { name: 'ChatGPT', usage: 92, success: 88 },
  { name: 'Midjourney', usage: 78, success: 85 },
  { name: 'Claude', usage: 65, success: 82 },
  { name: 'Stable Diffusion', usage: 55, success: 80 },
  { name: 'GitHub Copilot', usage: 85, success: 90 },
];

// Project Categories
const projectData = [
  { name: 'Chatbots', value: 35, color: '#2EB9DF' },
  { name: 'Image Gen', value: 25, color: '#9E00FF' },
  { name: 'ML Models', value: 20, color: '#FF6B6B' },
  { name: 'NLP', value: 15, color: '#4ECB71' },
  { name: 'Other', value: 5, color: '#FFA500' },
];

// Skills Gained
const skillsData = [
  { name: 'Prompt Engineering', score: 92 },
  { name: 'AI Integration', score: 88 },
  { name: 'Model Fine-tuning', score: 75 },
  { name: 'Data Preparation', score: 85 },
  { name: 'API Usage', score: 95 },
];

const ChartCard = ({ title, subtitle, children }: { 
  title: string; 
  subtitle?: string;
  children: React.ReactNode 
}) => (
  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
    <h3 className="text-xl font-semibold mb-1 text-white/90">{title}</h3>
    {subtitle && (
      <p className="text-sm text-white/50 mb-4">{subtitle}</p>
    )}
    <div className="h-[300px] w-full">
      {children}
    </div>
  </div>
);

export default function DashboardCharts() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <ChartCard 
        title="Course Growth & Engagement" 
        subtitle="Monthly student growth and project submissions"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={learningData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111',
                border: '1px solid #333',
                borderRadius: '8px',
              }}
            />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#2EB9DF"
              strokeWidth={2}
              dot={{ fill: '#2EB9DF' }}
            />
            <Line
              type="monotone"
              dataKey="projectSubmissions"
              stroke="#9E00FF"
              strokeWidth={2}
              dot={{ fill: '#9E00FF' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard 
        title="AI Tools Performance" 
        subtitle="Usage and success rates of different AI tools"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={toolsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111',
                border: '1px solid #333',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="usage" fill="#2EB9DF" radius={[4, 4, 0, 0]} />
            <Bar dataKey="success" fill="#9E00FF" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard 
        title="Project Distribution" 
        subtitle="Types of AI projects created by students"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={projectData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {projectData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#111',
                border: '1px solid #333',
                borderRadius: '8px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard 
        title="Skills Assessment" 
        subtitle="Average proficiency in key AI skills"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={skillsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111',
                border: '1px solid #333',
                borderRadius: '8px',
              }}
            />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#2EB9DF"
              fill="url(#colorScore)"
            />
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2EB9DF" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2EB9DF" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
} 