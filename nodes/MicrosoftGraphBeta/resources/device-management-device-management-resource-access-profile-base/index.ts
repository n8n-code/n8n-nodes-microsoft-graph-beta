import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementResourceAccessProfileBaseDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Resource Access Profiles",
					"value": "Device Management List Resource Access Profiles",
					"action": "Get resourceAccessProfiles from deviceManagement",
					"description": "Collection of resource access settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/resourceAccessProfiles"
						}
					}
				},
				{
					"name": "Device Management Create Resource Access Profiles",
					"value": "Device Management Create Resource Access Profiles",
					"action": "Create new navigation property to resourceAccessProfiles for deviceManagement",
					"description": "Create new navigation property to resourceAccessProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/resourceAccessProfiles"
						}
					}
				},
				{
					"name": "Device Management Delete Resource Access Profiles",
					"value": "Device Management Delete Resource Access Profiles",
					"action": "Delete navigation property resourceAccessProfiles for deviceManagement",
					"description": "Delete navigation property resourceAccessProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/resourceAccessProfiles/{{$parameter[\"deviceManagementResourceAccessProfileBase-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Resource Access Profiles",
					"value": "Device Management Get Resource Access Profiles",
					"action": "Get resourceAccessProfiles from deviceManagement",
					"description": "Collection of resource access settings associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/resourceAccessProfiles/{{$parameter[\"deviceManagementResourceAccessProfileBase-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Resource Access Profiles",
					"value": "Device Management Update Resource Access Profiles",
					"action": "Update the navigation property resourceAccessProfiles in deviceManagement",
					"description": "Update the navigation property resourceAccessProfiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/resourceAccessProfiles/{{$parameter[\"deviceManagementResourceAccessProfileBase-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Resource Access Profiles List Assignments",
					"value": "Device Management Resource Access Profiles List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of assignments for the device configuration profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/resourceAccessProfiles/{{$parameter[\"deviceManagementResourceAccessProfileBase-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Resource Access Profiles Create Assignments",
					"value": "Device Management Resource Access Profiles Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/resourceAccessProfiles/{{$parameter[\"deviceManagementResourceAccessProfileBase-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Resource Access Profiles Delete Assignments",
					"value": "Device Management Resource Access Profiles Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/resourceAccessProfiles/{{$parameter[\"deviceManagementResourceAccessProfileBase-id\"]}}/assignments/{{$parameter[\"deviceManagementResourceAccessProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Resource Access Profiles Get Assignments",
					"value": "Device Management Resource Access Profiles Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of assignments for the device configuration profile.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/resourceAccessProfiles/{{$parameter[\"deviceManagementResourceAccessProfileBase-id\"]}}/assignments/{{$parameter[\"deviceManagementResourceAccessProfileAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Resource Access Profiles Update Assignments",
					"value": "Device Management Resource Access Profiles Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/resourceAccessProfiles/{{$parameter[\"deviceManagementResourceAccessProfileBase-id\"]}}/assignments/{{$parameter[\"deviceManagementResourceAccessProfileAssignment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/resourceAccessProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management List Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management List Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management List Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management List Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management List Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management List Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management List Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management List Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management List Resource Access Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/resourceAccessProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Create Resource Access Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/resourceAccessProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Create Resource Access Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Delete Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Delete Resource Access Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Get Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Get Resource Access Profiles"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Get Resource Access Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Update Resource Access Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Update Resource Access Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles List Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles List Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles List Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles List Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles List Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles List Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles List Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles List Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles Delete Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles Get Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles Get Assignments"
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
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Resource Access Profile Base"
					],
					"operation": [
						"Device Management Resource Access Profiles Update Assignments"
					]
				}
			}
		},
];
