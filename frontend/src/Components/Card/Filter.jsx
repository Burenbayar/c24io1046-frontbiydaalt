import React from "react";
import { Form, Input, Select } from "antd";

const Filter = ({ filters, setFilters }) => {
  return (
    <Form  className="flex flex-col w-1/5 justify-center gap-2 p-6 bg-white  shadow-lg border border-gray-300  rounded-2xl">
      <p className="text-center text-gray-400">Filter</p>
      <Form.Item className="w-full  ">
        <Input
          className="h-12 w-full px-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 "
          placeholder="Search by name"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </Form.Item>

      <Form.Item className="w-full ">
        <Select
          className="h-12 w-full rounded-lg shadow-sm"
          placeholder="Select Color"
          allowClear
          onChange={(value) => setFilters({ ...filters, color: value || "" })}
        >
          <Select.Option value="">All Colors</Select.Option>
          {["Red", "Blue", "Yellow", "White", "Purple", "Black", "Green"].map((color) => (
            <Select.Option key={color.toLowerCase()} value={color.toLowerCase()}>
              {color}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item className=" w-1/2 ">
        <Input
          className="h-12 w-full px-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 "
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />
      </Form.Item>

      <Form.Item className="w-full w-1/2 ">
        <Input
          className="h-12 w-full px-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 "
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
      </Form.Item>
    </Form>
  );
};

export default Filter;
