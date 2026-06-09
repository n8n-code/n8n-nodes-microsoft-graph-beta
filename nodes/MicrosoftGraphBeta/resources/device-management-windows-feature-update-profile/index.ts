import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementWindowsFeatureUpdateProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Windows Feature Update Profiles",
					"value": "Device Management List Windows Feature Update Profiles",
					"action": "Get windowsFeatureUpdateProfiles from deviceManagement",
					"description": "A collection of windows feature update profiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles"
						}
					}
				},
				{
					"name": "Device Management Create Windows Feature Update Profiles",
					"value": "Device Management Create Windows Feature Update Profiles",
					"action": "Create new navigation property to windowsFeatureUpdateProfiles for deviceManagement",
					"description": "Create new navigation property to windowsFeatureUpdateProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles"
						}
					}
				},
				{
					"name": "Device Management Delete Windows Feature Update Profiles",
					"value": "Device Management Delete Windows Feature Update Profiles",
					"action": "Delete navigation property windowsFeatureUpdateProfiles for deviceManagement",
					"description": "Delete navigation property windowsFeatureUpdateProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles/{{$parameter[\"windowsFeatureUpdateProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Windows Feature Update Profiles",
					"value": "Device Management Get Windows Feature Update Profiles",
					"action": "Get windowsFeatureUpdateProfiles from deviceManagement",
					"description": "A collection of windows feature update profiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles/{{$parameter[\"windowsFeatureUpdateProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Windows Feature Update Profiles",
					"value": "Device Management Update Windows Feature Update Profiles",
					"action": "Update the navigation property windowsFeatureUpdateProfiles in deviceManagement",
					"description": "Update the navigation property windowsFeatureUpdateProfiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles/{{$parameter[\"windowsFeatureUpdateProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Feature Update Profiles List Assignments",
					"value": "Device Management Windows Feature Update Profiles List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments of the profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles/{{$parameter[\"windowsFeatureUpdateProfile-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Windows Feature Update Profiles Create Assignments",
					"value": "Device Management Windows Feature Update Profiles Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles/{{$parameter[\"windowsFeatureUpdateProfile-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Windows Feature Update Profiles Delete Assignments",
					"value": "Device Management Windows Feature Update Profiles Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles/{{$parameter[\"windowsFeatureUpdateProfile-id\"]}}/assignments/{{$parameter[\"windowsFeatureUpdateProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Feature Update Profiles Get Assignments",
					"value": "Device Management Windows Feature Update Profiles Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments of the profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles/{{$parameter[\"windowsFeatureUpdateProfile-id\"]}}/assignments/{{$parameter[\"windowsFeatureUpdateProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Windows Feature Update Profiles Update Assignments",
					"value": "Device Management Windows Feature Update Profiles Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsFeatureUpdateProfiles/{{$parameter[\"windowsFeatureUpdateProfile-id\"]}}/assignments/{{$parameter[\"windowsFeatureUpdateProfileAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/windowsFeatureUpdateProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management List Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management List Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management List Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management List Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management List Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management List Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management List Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management List Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management List Windows Feature Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsFeatureUpdateProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Create Windows Feature Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsFeatureUpdateProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Create Windows Feature Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Delete Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Delete Windows Feature Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Get Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Get Windows Feature Update Profiles"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Get Windows Feature Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Update Windows Feature Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Update Windows Feature Update Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles List Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles List Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles List Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles List Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles List Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles List Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles List Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles List Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Delete Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Get Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Get Assignments"
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
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Feature Update Profile"
					],
					"operation": [
						"Device Management Windows Feature Update Profiles Update Assignments"
					]
				}
			}
		},
];
