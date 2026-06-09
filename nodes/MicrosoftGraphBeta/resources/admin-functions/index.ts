import type { INodeProperties } from 'n8n-workflow';

export const adminFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Functions"
					]
				}
			},
			"options": [
				{
					"name": "Admin Service Announcement Health Overviews Service Health Issues Service Health Issue Incident Report",
					"value": "Admin Service Announcement Health Overviews Service Health Issues Service Health Issue Incident Report",
					"action": "Invoke function incidentReport",
					"description": "Invoke function incidentReport",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/healthOverviews/{{$parameter[\"serviceHealth-id\"]}}/issues/{{$parameter[\"serviceHealthIssue-id\"]}}/microsoft.graph.incidentReport()"
						}
					}
				},
				{
					"name": "Admin Service Announcement Issues Service Health Issue Incident Report",
					"value": "Admin Service Announcement Issues Service Health Issue Incident Report",
					"action": "Invoke function incidentReport",
					"description": "Invoke function incidentReport",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/serviceAnnouncement/issues/{{$parameter[\"serviceHealthIssue-id\"]}}/microsoft.graph.incidentReport()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}/microsoft.graph.incidentReport()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Functions"
					],
					"operation": [
						"Admin Service Announcement Health Overviews Service Health Issues Service Health Issue Incident Report"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}/microsoft.graph.incidentReport()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Functions"
					],
					"operation": [
						"Admin Service Announcement Issues Service Health Issue Incident Report"
					]
				}
			}
		},
];
