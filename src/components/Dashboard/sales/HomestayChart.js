import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const defaultData = [
  { name: "T1", uv: 0 },
  { name: "T2", uv: 0 },
  { name: "T3", uv: 0 },
  { name: "T4", uv: 0 },
  { name: "T5", uv: 0 },
  { name: "T6", uv: 0 },
  { name: "T7", uv: 0 },
  { name: "T8", uv: 0 },
  { name: "T9", uv: 0 },
  { name: "T10", uv: 0 },
  { name: "T11", uv: 0 },
  { name: "T12", uv: 0 },
];