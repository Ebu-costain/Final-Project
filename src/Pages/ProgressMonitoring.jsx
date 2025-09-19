function ProgressMonitoring() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Progress Monitoring</h1>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Active Students</h2>
          <p className="text-2xl font-bold text-blue-600">--</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Completed Courses</h2>
          <p className="text-2xl font-bold text-green-600">--</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">In Progress</h2>
          <p className="text-2xl font-bold text-yellow-600">--</p>
        </div>
      </div>

      {/* Progress Table */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Student Progress</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
          API data (progress details) will be displayed here...
        </div>
      </div>
    </div>
  );
}

export default ProgressMonitoring;