import React, { useState } from 'react';
import { PlusIcon, EyeIcon, PencilIcon, TrashIcon, ChevronDownIcon, CogIcon, XMarkIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { EyeIcon as EyeIconSolid } from '@heroicons/react/24/solid';
import { Search, RefreshCw } from 'lucide-react';

const mockUsers = [
  {
    id: '1',
    name: 'Stonesy',
    phone: '+23498345785',
    email: 'stone@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: '/assets/stone.png'
  },
  {
    id: '2',
    name: 'Stonesy',
    phone: '+23498345785',
    email: 'stone@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: '/assets/stone.png'
  },
  {
    id: '3',
    name: 'Stonesy',
    phone: '+23498345785',
    email: 'stone@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: '/assets/stone.png'
  },
  {
    id: '4',
    name: 'Stonesy',
    phone: '+23498345785',
    email: 'stone@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: '/assets/stone.png'
  },
  {
    id: '5',
    name: 'Stonesy',
    phone: '+23498345785',
    email: 'stone@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: '/assets/stone.png'
  },
];

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    status: true,
    avatar: null
  });

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || user.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Users</h2>
          <p className="text-gray-600">Manage your users</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Export buttons */}
          <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            <span className="text-xs font-bold">PDF</span>
          </button>
          <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <span className="text-xs font-bold">XLS</span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
            <RefreshCw className="w-5 h-5" />
          </button>
          
          {/* Add User button */}
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            <PlusIcon className="w-5 h-5" />
            Add User
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-w-[120px]"
            >
              <option value="all">Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <div className="w-full">
            {/* Header */}
            <div className="bg-gray-50 flex items-center px-6 py-4">
              <div className="flex-none w-8">
                <input type="checkbox" className="rounded border-gray-300" />
              </div>
              <div className="flex-1 text-sm font-medium text-gray-700">User Name</div>
              <div className="flex-1 text-sm font-medium text-gray-700">Phone</div>
              <div className="flex-1 text-sm font-medium text-gray-700">Email</div>
              <div className="flex-1 text-sm font-medium text-gray-700">Role</div>
              <div className="flex-1 text-sm font-medium text-gray-700">Status</div>
              <div className="flex-none w-20 text-right text-sm font-medium text-gray-700">Actions</div>
              <div className="flex-none w-12 text-right text-sm font-medium text-gray-700">
                {/* <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <CogIcon className="w-5 h-5 text-white" />
                </div> */}
              </div>
            </div>
            
            {/* User Rows */}
            <div className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <div key={user.id} className="flex items-center px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex-none w-8">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-900">{user.name}</span>
                    </div>
                  </div>
                  <div className="flex-1 text-sm text-gray-600">
                    {user.phone}
                  </div>
                  <div className="flex-1 text-sm text-gray-600">
                    {user.email}
                  </div>
                  <div className="flex-1 text-sm text-gray-600">
                    {user.role}
                  </div>
                  <div className="flex-1">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {user.status}
                    </span>
                  </div>
                  <div className="flex-none w-20 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedUser(user);
                          setShowEditModal(true);
                        }}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-none w-12 text-right">
                    {/* <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <CogIcon className="w-5 h-5 text-white" />
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filteredUsers.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No users found matching your criteria.</p>
        </div>
      )}

      {/* Add User Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">Add User</h3>
              <button 
                onClick={() => setShowModal(false)} 
                className="text-red-500 hover:text-red-700 rounded-full p-1"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-4">
              {/* Image Upload */}
              <div className="flex justify-center">
                <div className="w-32 h-32 border border-gray-300 rounded-lg flex flex-col items-center justify-center">
                  {newUser.avatar ? (
                    <img 
                      src={URL.createObjectURL(newUser.avatar)} 
                      alt="User avatar" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        <PlusIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-500">Add Image</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Upload Button */}
              <div className="flex justify-center">
                <label className="cursor-pointer">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Upload Image
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/jpeg, image/png"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setNewUser({...newUser, avatar: e.target.files[0]});
                      }
                    }}
                  />
                </label>
              </div>
              <div className="text-center text-xs text-gray-500">
                JPEG, PNG up to 2 MB
              </div>
              
              {/* Form Fields */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      User <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={newUser.name}
                      onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        value={newUser.role}
                        onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                      >
                        <option value="">Select</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Salesman">Salesman</option>
                        <option value="Supervisor">Supervisor</option>
                      </select>
                      <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={newUser.email}
                      onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={newUser.phone}
                      onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        value={newUser.password}
                        onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIconSolid className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        value={newUser.confirmPassword}
                        onChange={(e) => setNewUser({...newUser, confirmPassword: e.target.value})}
                      />
                      <button 
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                      >
                        {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIconSolid className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <div className="relative inline-block w-12 h-6">
                    <input 
                      type="checkbox" 
                      className="opacity-0 w-0 h-0"
                      checked={newUser.status}
                      onChange={() => setNewUser({...newUser, status: !newUser.status})}
                      id="status-toggle"
                    />
                    <label 
                      htmlFor="status-toggle"
                      className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-200 ease-in ${newUser.status ? 'bg-green-400' : 'bg-gray-300'}`}
                    >
                      <span 
                        className={`absolute left-0.5 bottom-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ease-in ${newUser.status ? 'transform translate-x-6' : ''}`}
                      ></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 p-4 border-t">
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">Edit User</h3>
              <button 
                onClick={() => setShowEditModal(false)} 
                className="text-red-500 hover:text-red-700 rounded-full p-1"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-4">
              {/* Image Upload */}
              <div className="flex justify-center">
                <div className="w-32 h-32 border border-gray-300 rounded-lg flex flex-col items-center justify-center">
                  {selectedUser.avatar ? (
                    <img 
                      src={selectedUser.avatar}
                      alt="User avatar" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        <PlusIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-500">Add Image</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Upload Button */}
              <div className="flex justify-center">
                <label className="cursor-pointer">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Upload Image
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/jpeg, image/png"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setSelectedUser({...selectedUser, avatar: URL.createObjectURL(e.target.files[0])});
                      }
                    }}
                  />
                </label>
              </div>
              <div className="text-center text-xs text-gray-500">
                JPEG, PNG up to 2 MB
              </div>
              
              {/* Form Fields */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      User <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={selectedUser.name}
                      onChange={(e) => setSelectedUser({...selectedUser, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        value={selectedUser.role}
                        onChange={(e) => setSelectedUser({...selectedUser, role: e.target.value})}
                      >
                        <option value="">Select</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Salesman">Salesman</option>
                        <option value="Supervisor">Supervisor</option>
                      </select>
                      <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={selectedUser.email}
                      onChange={(e) => setSelectedUser({...selectedUser, email: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      value={selectedUser.phone}
                      onChange={(e) => setSelectedUser({...selectedUser, phone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <div className="relative inline-block w-12 h-6">
                    <input 
                      type="checkbox" 
                      className="opacity-0 w-0 h-0"
                      checked={selectedUser.status === 'Active'}
                      onChange={() => setSelectedUser({...selectedUser, status: selectedUser.status === 'Active' ? 'Inactive' : 'Active'})}
                      id="edit-status-toggle"
                    />
                    <label 
                      htmlFor="edit-status-toggle"
                      className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-200 ease-in ${selectedUser.status === 'Active' ? 'bg-green-400' : 'bg-gray-300'}`}
                    >
                      <span 
                        className={`absolute left-0.5 bottom-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ease-in ${selectedUser.status === 'Active' ? 'transform translate-x-6' : ''}`}
                      ></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 p-4 border-t">
              <button 
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  // Here you would typically update the user in your database
                  // For this demo, we'll just close the modal
                  setShowEditModal(false);
                }}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* No custom styles needed - using Tailwind classes */}
    </div>
  );
}