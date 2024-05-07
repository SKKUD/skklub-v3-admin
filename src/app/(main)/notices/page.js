'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { useSelection } from '@/hooks/use-selection';
import { applyPagination } from '@/utils/apply-pagination';
import MiniHeader from '@/components/common/mini-header';
import axios from 'axios';
import NoticeTable from '@/components/notice/notice-table';

export default function NoticesPage() {
	return (
		<>
			<NoticeTable />
		</>
	);
}
