import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceEnrollmentConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Device Enrollment Configurations",
					"value": "Device Management List Device Enrollment Configurations",
					"action": "Get deviceEnrollmentConfigurations from deviceManagement",
					"description": "The list of device enrollment configurations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations"
						}
					}
				},
				{
					"name": "Device Management Create Device Enrollment Configurations",
					"value": "Device Management Create Device Enrollment Configurations",
					"action": "Create new navigation property to deviceEnrollmentConfigurations for deviceManagement",
					"description": "Create new navigation property to deviceEnrollmentConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations"
						}
					}
				},
				{
					"name": "Device Management Delete Device Enrollment Configurations",
					"value": "Device Management Delete Device Enrollment Configurations",
					"action": "Delete navigation property deviceEnrollmentConfigurations for deviceManagement",
					"description": "Delete navigation property deviceEnrollmentConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Device Enrollment Configurations",
					"value": "Device Management Get Device Enrollment Configurations",
					"action": "Get deviceEnrollmentConfigurations from deviceManagement",
					"description": "The list of device enrollment configurations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Device Enrollment Configurations",
					"value": "Device Management Update Device Enrollment Configurations",
					"action": "Update the navigation property deviceEnrollmentConfigurations in deviceManagement",
					"description": "Update the navigation property deviceEnrollmentConfigurations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Enrollment Configurations List Assignments",
					"value": "Device Management Device Enrollment Configurations List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the device configuration profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Device Enrollment Configurations Create Assignments",
					"value": "Device Management Device Enrollment Configurations Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Device Enrollment Configurations Delete Assignments",
					"value": "Device Management Device Enrollment Configurations Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/assignments/{{$parameter[\"enrollmentConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Enrollment Configurations Get Assignments",
					"value": "Device Management Device Enrollment Configurations Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the device configuration profile",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/assignments/{{$parameter[\"enrollmentConfigurationAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Enrollment Configurations Update Assignments",
					"value": "Device Management Device Enrollment Configurations Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceEnrollmentConfigurations/{{$parameter[\"deviceEnrollmentConfiguration-id\"]}}/assignments/{{$parameter[\"enrollmentConfigurationAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/deviceEnrollmentConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management List Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management List Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management List Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management List Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management List Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management List Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management List Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management List Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management List Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceEnrollmentConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Create Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceEnrollmentConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Create Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Delete Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Delete Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Get Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Get Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Get Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Update Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Update Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Enrollment Configuration"
					],
					"operation": [
						"Device Management Device Enrollment Configurations Update Assignments"
					]
				}
			}
		},
];
