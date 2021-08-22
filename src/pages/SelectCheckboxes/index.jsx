import React, { useState, useEffect } from 'react';
import './index.scoped.scss';

const getMockData = (count) =>
  [...Array(count).keys()].map((key) => ({
    id: key,
    selected: false,
    disabled: !!Math.floor(Math.random() * 2),
  }));

/**
 * Shift + click to select checkboxes
 */
const SelectCheckboxes = () => {
  const [initialDataCount, setInitialDataCount] = useState(30);
  const [dataList, setDataList] = useState(getMockData(initialDataCount));
  const [selectedRowKeys, setSelectedRowKeys] = useState(
    dataList.filter((item) => item.selected).map((item) => item.id)
  );
  const [lastSelectedKey, setLastSelectedKey] = useState(null);
  const [isShiftDown, setIsShiftDown] = useState(false);

  const handleSetDataCount = (e) => {
    setInitialDataCount(+e.target.value);
  };

  const handleReloadData = () => {
    setDataList(getMockData(initialDataCount));
    setSelectedRowKeys(dataList.filter((item) => item.selected).map((item) => item.id));
    setLastSelectedKey(null);
  };

  const handleSelect = (id) => {
    let newSelectedRowKeys;
    const currentSelectedIndex = dataList.findIndex((item) => item.id === id);
    const lastSelectedIndex = dataList.findIndex((item) => item.id === lastSelectedKey);
    const isSelected = selectedRowKeys.includes(id);

    if (isShiftDown) {
      const newSelectedKeys = [...dataList]
        .slice(
          Math.min(lastSelectedIndex, currentSelectedIndex),
          Math.max(lastSelectedIndex, currentSelectedIndex) + 1
        )
        .filter((item) => !item.disabled)
        .map((item) => item.id);
      const selections = [...new Set([...selectedRowKeys, ...newSelectedKeys])];
      newSelectedRowKeys = isSelected
        ? selections.filter((item) => !newSelectedKeys.includes(item))
        : selections;
    } else {
      newSelectedRowKeys = isSelected
        ? selectedRowKeys.filter((key) => key !== id)
        : [...selectedRowKeys, id];
    }
    setSelectedRowKeys(newSelectedRowKeys);
    setLastSelectedKey(id);
  };

  const handleSelectAll = () => {
    const isAllSelected = selectedRowKeys.length === dataList.length;
    const newSelectedRowKeys = isAllSelected ? [] : dataList.map((item) => item.id);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const thCheckboxStatus = () => {
    if (selectedRowKeys.length === dataList.length) return 'checked';
    if (selectedRowKeys.length > 0) return 'indeterminate';
    return '';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Shift') setIsShiftDown(true);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Shift') setIsShiftDown(false);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>
              <span className={`checkbox ${thCheckboxStatus}`}>
                <input type="checkbox" onChange={handleSelectAll} />
                <span className="checkbox-inner" />
              </span>
            </th>
            <th>ID</th>
            <th>狀態</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((row) => (
            <tr key={row.id}>
              <td>
                {!row.disabled && (
                  <span className={`checkbox ${selectedRowKeys.includes(row.id) ? 'checked' : ''}`}>
                    <input
                      type="checkbox"
                      value={selectedRowKeys.includes(row.id)}
                      onChange={() => handleSelect(row.id)}
                    />
                    <span className="checkbox-inner" />
                  </span>
                )}
              </td>
              <td>{row.id}</td>
              <td>00-未派車</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="info">
        <div>lastSelectedKey: {lastSelectedKey}</div>
        <div>isShiftDown: {isShiftDown ? 'true' : 'false'}</div>
        <div>selectedRowKeys: {JSON.stringify(selectedRowKeys)}</div>
        <div>
          <input value={initialDataCount} onChange={handleSetDataCount} />
          <button type="button" onClick={handleReloadData}>
            Reload
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectCheckboxes;
