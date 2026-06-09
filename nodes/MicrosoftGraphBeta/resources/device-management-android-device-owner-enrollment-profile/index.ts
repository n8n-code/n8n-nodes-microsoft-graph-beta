import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementAndroidDeviceOwnerEnrollmentProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Device Owner Enrollment Profile"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Android Device Owner Enrollment Profiles",
					"value": "Device Management List Android Device Owner Enrollment Profiles",
					"action": "Get androidDeviceOwnerEnrollmentProfiles from deviceManagement",
					"description": "Android device owner enrollment profile entities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/androidDeviceOwnerEnrollmentProfiles"
						}
					}
				},
				{
					"name": "Device Management Create Android Device Owner Enrollment Profiles",
					"value": "Device Management Create Android Device Owner Enrollment Profiles",
					"action": "Create new navigation property to androidDeviceOwnerEnrollmentProfiles for deviceManagement",
					"description": "Create new navigation property to androidDeviceOwnerEnrollmentProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidDeviceOwnerEnrollmentProfiles"
						}
					}
				},
				{
					"name": "Device Management Delete Android Device Owner Enrollment Profiles",
					"value": "Device Management Delete Android Device Owner Enrollment Profiles",
					"action": "Delete navigation property androidDeviceOwnerEnrollmentProfiles for deviceManagement",
					"description": "Delete navigation property androidDeviceOwnerEnrollmentProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{{$parameter[\"androidDeviceOwnerEnrollmentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Android Device Owner Enrollment Profiles",
					"value": "Device Management Get Android Device Owner Enrollment Profiles",
					"action": "Get androidDeviceOwnerEnrollmentProfiles from deviceManagement",
					"description": "Android device owner enrollment profile entities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{{$parameter[\"androidDeviceOwnerEnrollmentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Android Device Owner Enrollment Profiles",
					"value": "Device Management Update Android Device Owner Enrollment Profiles",
					"action": "Update the navigation property androidDeviceOwnerEnrollmentProfiles in deviceManagement",
					"description": "Update the navigation property androidDeviceOwnerEnrollmentProfiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{{$parameter[\"androidDeviceOwnerEnrollmentProfile-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management List Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management List Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management List Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management List Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management List Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management List Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management List Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management List Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management List Android Device Owner Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management Create Android Device Owner Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management Create Android Device Owner Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management Delete Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management Delete Android Device Owner Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management Get Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management Get Android Device Owner Enrollment Profiles"
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
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management Get Android Device Owner Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management Update Android Device Owner Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Device Owner Enrollment Profile"
					],
					"operation": [
						"Device Management Update Android Device Owner Enrollment Profiles"
					]
				}
			}
		},
];
