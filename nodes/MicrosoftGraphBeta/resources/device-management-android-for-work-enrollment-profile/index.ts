import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementAndroidForWorkEnrollmentProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Enrollment Profile"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Android For Work Enrollment Profiles",
					"value": "Device Management List Android For Work Enrollment Profiles",
					"action": "Get androidForWorkEnrollmentProfiles from deviceManagement",
					"description": "Android for Work enrollment profile entities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/androidForWorkEnrollmentProfiles"
						}
					}
				},
				{
					"name": "Device Management Create Android For Work Enrollment Profiles",
					"value": "Device Management Create Android For Work Enrollment Profiles",
					"action": "Create new navigation property to androidForWorkEnrollmentProfiles for deviceManagement",
					"description": "Create new navigation property to androidForWorkEnrollmentProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidForWorkEnrollmentProfiles"
						}
					}
				},
				{
					"name": "Device Management Delete Android For Work Enrollment Profiles",
					"value": "Device Management Delete Android For Work Enrollment Profiles",
					"action": "Delete navigation property androidForWorkEnrollmentProfiles for deviceManagement",
					"description": "Delete navigation property androidForWorkEnrollmentProfiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/androidForWorkEnrollmentProfiles/{{$parameter[\"androidForWorkEnrollmentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Android For Work Enrollment Profiles",
					"value": "Device Management Get Android For Work Enrollment Profiles",
					"action": "Get androidForWorkEnrollmentProfiles from deviceManagement",
					"description": "Android for Work enrollment profile entities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/androidForWorkEnrollmentProfiles/{{$parameter[\"androidForWorkEnrollmentProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Android For Work Enrollment Profiles",
					"value": "Device Management Update Android For Work Enrollment Profiles",
					"action": "Update the navigation property androidForWorkEnrollmentProfiles in deviceManagement",
					"description": "Update the navigation property androidForWorkEnrollmentProfiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/androidForWorkEnrollmentProfiles/{{$parameter[\"androidForWorkEnrollmentProfile-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/androidForWorkEnrollmentProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management List Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management List Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management List Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management List Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management List Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management List Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management List Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management List Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management List Android For Work Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidForWorkEnrollmentProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management Create Android For Work Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidForWorkEnrollmentProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management Create Android For Work Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management Delete Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management Delete Android For Work Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management Get Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management Get Android For Work Enrollment Profiles"
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
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management Get Android For Work Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management Update Android For Work Enrollment Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Enrollment Profile"
					],
					"operation": [
						"Device Management Update Android For Work Enrollment Profiles"
					]
				}
			}
		},
];
